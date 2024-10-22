export interface Button {
    label: string;
    icon: string;
    className: string;
}

export interface HeaderImage {
    src: string;
    alt: string;
}

export interface HeaderTypes {
    title: string;
    description: string;
    buttons: Button[];
    headerImage: HeaderImage;
}

export interface HeaderResponse {
    header: HeaderTypes;
}
