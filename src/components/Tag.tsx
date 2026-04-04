import "./Tag.css";

interface TagProps {
    name: string;
    children?: React.ReactNode;
}

export default function Tag({ name, children }: TagProps) {
    return children ? (
        <details name="tag" className="tag-container">
            <summary className="tag">{name}</summary>
            {children}
        </details>
    ) : (
        <div className="tag">{name}</div>
    );
}
