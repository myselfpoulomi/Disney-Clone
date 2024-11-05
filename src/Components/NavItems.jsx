import React from 'react'

function NavItems({name,Icon}) {
  return (
    <div className="text-white gap-3 flex items-center text-[18px] font-semibold cursor-pointer">
  <Icon />
  <h2 className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 ease-in-out hover:after:w-full hidden md:block">
    {name}
  </h2>
</div>
  )
}

export default NavItems