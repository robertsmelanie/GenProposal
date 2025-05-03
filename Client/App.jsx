import { useState } from 'react';
import JobInputForm from './Components/JobInputForm';
import ProposalOutput from './Components/ProposalOutput';

function App() {
    const [proposal, setProposal] = useState('');

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">AI Proposal Generator</h1>
            <JobInputForm onGenerate={setProposal} />
            {proposal && <ProposalOutput proposal={proposal} />}
        </div>
    );
}

export default App;
