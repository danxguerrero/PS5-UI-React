const Navbar = () => {
    return <div className="flex p-4 border border-red-400 items-center">
        <div className="w-full flex justify-between">
            <div className="flex text-white">
                <div className="m-3 text-xl">Games</div>
                <div className="m-3 text-xl">Media</div>
            </div>
            <div className="flex text-2xl items-center text-white">
                <i className="fa-solid fa-magnifying-glass m-3"></i>
                <i className="fa-solid fa-gear m-3"></i>
                <i className="fa-solid fa-circle-user m-3"></i>
                <div className="ml-8 m-3 text-3xl">12:00</div>
            </div>
        </div>
    </div>
}

export default Navbar;