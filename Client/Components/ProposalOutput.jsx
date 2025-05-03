export default function ProposalOutput({ proposal }) {
    return (
        <div className="mt-6 p-4 bg-gray-100 rounded border">
            <h2 className="text-xl font-semibold mb-2">Generated Proposal</h2>
            <pre className="whitespace-pre-wrap">{proposal}</pre>
        </div>
    );
}
