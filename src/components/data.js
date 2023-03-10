import React from 'react'
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'accueil',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/rent',
    text: 'louer',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/house',
    text: 'maisons',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/land',
    text: 'terrains',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/about',
    text: 'á propos',
    icon: <FaWpforms />,
  },
  {
    id: 6,
    url: '/contact',
    text: 'contact',
    icon: <FaWpforms />,
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
]
