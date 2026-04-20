const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    "{ num: '06', title: 'Predictive Analytics', desc: 'Data pipelines that forecast outcomes before they become incidents.', i: Icons.analytics },",
    "{ num: '06', title: 'CRM & ERP Solutions', desc: 'Centralized platforms to manage sales funnels, automate leads, and streamline business operations across all departments.', i: Icons.analytics },"
);

content = content.replace(
    "{ num: '07', title: 'Identity Management', desc: 'Biometric and multi-factor authentication systems for zero-tolerance security environments.', i: Icons.identity },",
    "{ num: '07', title: 'B2B Client Portals', desc: 'Secure, high-conversion hubs allowing partners and clients to plug directly into your proprietary databases and workflows.', i: Icons.identity },"
);

content = content.replace(
    "{ num: '08', title: 'Edge Compute Layer', desc: 'Deploying computation physically closer to the demand ?\" sub-millisecond response.', i: Icons.edge },",
    "{ num: '08', title: 'Legacy Modernization', desc: 'Transitioning brittle, outdated software monoliths into high-speed, scalable Next.js and React Native architecture.', i: Icons.edge },"
);

fs.writeFileSync(file, content, 'utf8');