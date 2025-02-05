import LoadingGif from "../assets/loading.gif"

function Loading() {
    return (
        <div className="loading-container">
            <img src={ LoadingGif } alt="" />
        </div>
    )
}

export default Loading;