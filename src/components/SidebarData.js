import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
        title: 'Conozcanos',
        path: '/conozcanos',
        icon: <BsIcons.BsFillPersonCheckFill />,
        cName: 'nav-text',
    },


    {
        title: 'Servicios',
        path: '/servicios',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
        title: 'Cubrimiento',
        path: '/cubrimiento',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
        title: 'Vinculacion',
        path: '/vinculacion',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
        title: 'Clasificados',
        path: '/clasificados',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
        title: 'Noticias',
        path: '/',
        icon: <GiIcons.GiNewspaper />,
        cName: 'nav-text',
    }
]