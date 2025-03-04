import GameTile from "./GameTile";

const GameTileRow = () => {
    return <div className=" w-full flex mt-8">
        {[...Array(5)].map((_, i) => (
            <GameTile key={i}/>
        ))}
    </div>
}

export default GameTileRow;