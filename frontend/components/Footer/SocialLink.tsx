interface SocialLinkProps {
  name: string;
  url: string;
  provider: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export default function SocialLink({
  name,
  url,
  provider: Icon,
}: SocialLinkProps) {
  return (
    <li>
      <a
        aria-label={`Visit our ${name}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          aria-hidden="true"
          className="w-6 h-6 hover:text-accent transition-colors duration-300 ease-in"
        />
      </a>
    </li>
  );
}
