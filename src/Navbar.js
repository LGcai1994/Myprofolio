import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>My Profolio Page</Link>
            <ul>
                <CustomLink to='/project1'>Project1</CustomLink>
                <CustomLink to='/project2'>Project2</CustomLink>
                <CustomLink to='/project3'>Project3</CustomLink>
                <CustomLink to='/project4'>Project4</CustomLink>
                <CustomLink to='/about'>About Page</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}