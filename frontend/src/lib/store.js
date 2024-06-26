import { writable } from 'svelte/store';
// Note: Ideally, this is the overall structure of the store
const store = writable({
    "media_screen": "manga",
    "manga_search_results": [
        /*{
            id: int
            title: string,
            img: string, //url or link?
            plugin: string, //file inside lib/manga_sources without "./" and ".js". e.g. "mangadex"
            authors: string,
            artists: string
            description: string,
            chapters: [
                {
                    id: string,
                    num: int,
                    title: string,
                    page: int,
                    completed: boolean
                }
            ]
        }*/
    ],
    "manga_library": [
        /*{
            id: string
            title: string,
            img: string, //url or link?
            plugin: string, //file inside lib/manga_sources without "./" and ".js". e.g. "mangadex"
            authors: string,
            artists: string
            description: string,
            chapters: [
                {
                    id: string,
                    num: int,
                    title: string,
                    page: int,
                    completed: boolean
                }
            ]
            // todo:
            // language?
        }*/
    ],
    "manga_history": [
        /*{
            id: int
            title: string,
            img: string, //url or link?
            plugin: string, //file inside lib/manga_sources without "./" and ".js". e.g. "mangadex"
            authors: string,
            artists: string
            description: string,
            chapters: [
                {
                    id: string,
                    num: int,
                    title: string,
                    page: int,
                    completed: boolean
                }
            ]
        }*/
    ],
    "manga_updates": [
        {
            // manga_id: string
            // chapter: {
            //     id: string,
            //     num: int,
            //     title: string,
            //     page: int,
            //     completed: boolean
            // }
            // receieved: int // Date.now()
        }
    ],
    "ln_search_results": [],
    "ln_library": [],
    "ln_history": [],
    "ln_updates": [],
    "settings": {
        "quickselect": {}, // typically: "[plugin_name]": Boolean, 
        "library_widths": {}, // "manga", "ln", and "anime", equal to a string of the width #
    }
});
export default store;
