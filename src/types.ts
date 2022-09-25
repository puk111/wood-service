import type { ReactNode } from 'react'

export interface BackGroundProps {
    children: React.ReactNode;
}

export interface CaroselImgProps {
    dataImg: string[];
}

export interface TabImgProps extends Array<string>{}

export interface NavProps {
    background: boolean;
}

export interface WorkProps {
    data: string[];
}

export interface PriceProps {
    data: string[];
}

export interface WoodWorkProps {
    img: string;
    title: string;
    list: any;
}