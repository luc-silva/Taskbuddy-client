import { ArrowSquareOut } from "phosphor-react";

export const ExternalLinks = () => {
    const anchors = [
        { site: "GitHub", link: "https://github.com/luc-silva" },
        { site: "Linkedin", link: "https://www.linkedin.com/in/silva-luc/" },
    ];
    return (
        <>
            {anchors.map((item) => {
                return (
                    <li>
                        <a href={item.link} target={"_blank"}>
                            {item.site}
                            <ArrowSquareOut
                                size={18}
                                color="var(--main-color)"
                            />
                        </a>
                    </li>
                );
            })}
        </>
    );
};
