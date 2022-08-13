export interface Experience {
    name: string;
    employer: string;
    start_date: string;
    end_date: string;
    role: string;
    description: string;
    technology: string[];
    image_path: string;
    duration: number;
}

export const experiences: Experience[] = [
    {
        name: "Sommerjobb clave",
        employer: "Clave",
        start_date: "Juli",
        end_date: "June",
        role: "Developer",
        description: "Developed a website in collaboration with Bring",
        technology: ["React", "C#", "Dotnet", "Azure", "Devops"],
        image_path: "",
        duration: 6
    }
]