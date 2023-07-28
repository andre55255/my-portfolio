interface AuxPropsSocialIconItem {
    link?: string;
    Icon: JSX.Element;
}

export default function SocialIconItem({ link, Icon }: AuxPropsSocialIconItem) {
    return (
        <a href={link ?? "#"} target={link ? "_blank" : "_self"} rel="noreferrer">
            {Icon}
        </a>
    );
}
