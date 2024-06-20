const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle policy submission
app.post('/parse-policy', (req, res) => {
    const policy = req.body.policy;
    const graphData = parsePolicy(policy);
    res.json(graphData);
});

// Start the server
app.listen(port, () => {
    console.log(`IAM Policy Simulator app listening at http://localhost:${port}`);
});

// Function to parse the policy
function parsePolicy(policy) {
    try {
        const parsedPolicy = JSON.parse(policy);
        const statements = Array.isArray(parsedPolicy.Statement) ? parsedPolicy.Statement : [parsedPolicy.Statement];

        const graphData = {
            nodes: [],
            links: []
        };

        statements.forEach((statement, index) => {
            const effectNode = { id: `effect-${index}`, label: 'Effect', group: 'effect', value: statement.Effect };
            graphData.nodes.push(effectNode);

            const actions = Array.isArray(statement.Action) ? statement.Action : [statement.Action];
            actions.forEach((action, actionIndex) => {
                const actionNode = { id: `action-${index}-${actionIndex}`, label: action, group: 'action', value: action };
                graphData.nodes.push(actionNode);
                graphData.links.push({ source: effectNode.id, target: actionNode.id });
            });

            const resources = Array.isArray(statement.Resource) ? statement.Resource : [statement.Resource];
            resources.forEach((resource, resourceIndex) => {
                const resourceNode = { id: `resource-${index}-${resourceIndex}`, label: resource, group: 'resource', value: resource };
                graphData.nodes.push(resourceNode);
                graphData.links.push(...actions.map((_, actionIndex) => ({
                    source: `action-${index}-${actionIndex}`,
                    target: resourceNode.id
                })));
            });

            if (statement.Condition) {
                const conditionNode = { id: `condition-${index}`, label: 'Condition', group: 'condition', value: JSON.stringify(statement.Condition) };
                graphData.nodes.push(conditionNode);
                graphData.links.push({ source: effectNode.id, target: conditionNode.id });
            }
        });

        return graphData;
    } catch (error) {
        console.error('Error parsing policy:', error);
        return {};
    }
}
