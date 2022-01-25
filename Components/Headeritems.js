

function Headeritems({Icon , Title}) {
    return (
    <div className="group flex flex-col items-center cursor-pointer  w-16 sm:w-20  hover:text-white">
        <Icon className="h-10  mt-2  group-hover:animate-bounce"/>
        <p className="opacity-0 group-hover:opacity-100 font-serif  text-sm ">{Title}</p>
    </div>
    )
}

export default Headeritems
