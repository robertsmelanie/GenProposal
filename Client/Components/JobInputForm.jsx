import { useState } from 'react';

export default function JobInputForm({ onGenerate }) {
    const [jobDesc, setJobDesc] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/generateProposal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jobDescription: jobDesc, userInfo }),
        });

        const data = await res.json();
        onGenerate(data.proposal);
        setLoading(false);
    };

    return (
        <div className="space-y-2">
            <textarea
                placeholder="Paste the job description here"
                className="w-full p-2 border rounded"
                rows={6}
                onChange={e => setJobDesc(e.target.value)}
            />
            <textarea
                placeholder="Enter your background, skills, and tone"
                className="w-full p-2 border rounded"
                rows={4}
                onChange={e => setUserInfo(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate Proposal'}
            </button>
        </div>
    );
}









function JobInputForm({ onGenerate }) {
    const [jobDesc, setJobDesc] = useState('');
    const [userInfo, setUserInfo] = useState('');

    const handleSubmit = async () => {
        const res = await fetch('/api/generateProposal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jobDescription: jobDesc, userInfo }),
        });

        const data = await res.json();
        onGenerate(data.proposal);
    };

    return (
        <div>
            <textarea onChange={e => setJobDesc(e.target.value)} placeholder="Paste job post" />
            <textarea onChange={e => setUserInfo(e.target.value)} placeholder="Your skills, experience, tone" />
            <button onClick={handleSubmit}>Generate Proposal</button>
        </div>
    );
}
