import { Imovie } from "../models/movies";

export let moviesData: Array<Imovie> = [
    {
        movieID: 1,
        title: "Super 30",
        rating: 3.5,
        image: "https://static.toiimg.com/thumb/imgsize-23456,msid-69618438,width-600,resizemode-4/whatsapp-image-2019-06-02-at-12-14-33-pm-1-.jpg",
        description: "Super 30 is a renowned educational program founded by mathematician Anand Kumar in 2002, which selects 30 underprivileged students annually and provides free coaching, food, and accommodation to prepare them for the IIT-JEE exam. Based in Patna, Bihar, it has achieved high success rates, often placing most of its students in prestigious Indian Institutes of Technology (IITs)."
    },
    {
        movieID: 2,
        title: "Start-Up",
        rating: 2.5,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Start-Up_2020.jpg/250px-Start-Up_2020.jpg",
        description: "Start-Up (2020) is a South Korean Netflix drama set in the fictional Sandbox, Korea's Silicon Valley. It follows Seo Dal-mi (Bae Suzy), a passionate dreamer, and Nam Do-san (Nam Joo-hyuk), founder of struggling Samsan Tech, as they navigate the high-pressure world of AI tech startups, romance, and competition. "
    },
    {
        movieID: 3.2,
        title: "Titanic",
        rating: 3,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS612WY71Z873umSTg4IT2NYD00ct-I1L5PVAb8Mb8Hou62Yq7YEpc9BQEBooNDTBW3xB0WdCFMVXAa2X7Aub-6J_vgIywV6bVb-COTOuNu",
        description: "Titanic (1997) is an epic romance-disaster film directed by James Cameron, starring Leonardo DiCaprio and Kate Winslet as lovers from different social classes who meet on the ill-fated 1912 maiden voyage of the RMS Titanic. The film blends fictional romance with historical detail and spectacular disaster sequences, ultimately winning 11 Academy Awards."
    }
]