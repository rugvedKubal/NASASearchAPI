

export class SearchModel {
    collection: { 
        items: {
            data: { 
                title: string
            }[],
            links: {
                href: string
            }[]
        }[] 
    };
}