import React, { useState } from 'react'
import Link from 'next/link'

const structure = [
  {
    name: 'root',
    type: 'folder',
    children: [
      {
        name: 'latest projects',
        type: 'folder',
        children: [
          { name: 'ethernal faces', type: 'link', link: '/projects/ethernal-faces' },
          { name: 'hyphe', type: 'link', link: '/projects/hyphe' },
          { name: 'aimy.rocks', type: 'link', link: '/projects/aimy-rocks' },
          { name: 'loulu', type: 'link', link: '/projects/loulu' },
        ],
      },
      {
        name: 'personal',
        type: 'folder',
        children: [
          { name: 'about me', type: 'link', link: "/about" },
          { name: 'thoughts', type: 'link', link: "/thoughts" },
          { name: 'process', type: 'link', link: "/process" },
          { name: 'contact', type: 'link', link: "/contact" },
        ],
      },
      {
        name: 'utils',
        type: 'folder',
        children: [
          {
            name: 'very secret', type: 'folder',
            children: [
              {
                name: 'dont click me', type: 'folder',
                children: [
                  {
                    name: 'are you sure?', type: 'folder',
                    children: [
                      { name: 'fire distinguisher', type: 'file' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
    ],
  },
]

const _defaultOpenFolders = [
  "root",
  "latest projects",
]


const Folder = ({ name, children, open, setOpen, level }) => {
  const toggleOpen = () => setOpen(!open)

  return (
    <div className={`flex flex-col gap-4`}>
      <span style={{marginLeft: `${level * 30}px`}} className={`flex items-center gap-2 cursor-pointer`} onClick={toggleOpen}>
        <div className="border-b border-l h-3 w-3 self-start border-white"></div>
        <img className="h-6" src={open ? "/icons/t_folder_open.svg" : "/icons/t_folder_close_01.svg"} />
        <span className="font-courier">{name}</span>
      </span>
      {open && children}
    </div>
  )
}

const File = ({ name, level, type, link }) => {
  return (
    <div style={{marginLeft: `${level * 30}px`}} className={`flex items-center gap-2`}>
      <div className="border-b border-l h-3 w-3 self-start border-white"></div>
      <img className="h-6" src="/icons/t_file.svg"/>
      {type === "link" ?
        <Link href={link} legacyBehavior><a className="font-courier cursor-pointer">{name}</a></Link> :
        <span className="font-courier">{name}</span>
      }
    </div>
  )
}

const FolderStructure = ({ defaultOpenFolders = _defaultOpenFolders }) => {
  const [openFolders, setOpenFolders] = useState(defaultOpenFolders)

  const renderStructure = (folder, level = 0) => {
    const isOpen = openFolders.includes(folder.name)
    const setIsOpen = () => {
      if (isOpen) {
        setOpenFolders(openFolders.filter((name) => name !== folder.name))
      } else {
        setOpenFolders([...openFolders, folder.name])
      }
    }

    if (folder.type === 'folder') {
      return (
        <Folder name={folder.name} open={isOpen} setOpen={setIsOpen} level={level}>
          {folder.children.map((child) => renderStructure(child, level + 1))}
        </Folder>
      )
    } else {
      return <File name={folder.name} level={level} {...folder} />
    }
  }

  return <div className="my-12">{structure.map(renderStructure)}</div>
}

export default FolderStructure
