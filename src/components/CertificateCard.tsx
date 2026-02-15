interface CertificateProps {
    title: string;
    description: string;
    link: string;
    certificationDate?: string;
}

export default function CertificateCard({ title, description, link, certificationDate }: CertificateProps) {
    return (
        <article className="rounded-lg border border-gray-800 bg-gray-850 p-4 shadow-sm hover:shadow-md transition">
            <h4 className="text-md font-semibold text-white">{title}</h4>
            {certificationDate && <p className="mt-1 text-xs text-gray-400">{certificationDate}</p>}
            <p className="mt-1 text-gray-300">{description}</p>
            <a href={link} className="mt-2 inline-block rounded bg-indigo-600 px-2 py-1 text-xs font-medium text-white hover:bg-indigo-500">
                View Certificate
            </a>
        </article>
    );
}