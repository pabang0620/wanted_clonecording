function App() {
    const x = '리액트'

    return (
        <div>
        <div>
                <h1>{x}</h1>
        </div>
            <div>
                공부하기
        </div>
            {x==='리액트'?<h2>리액트입니다</h2>:<h2>리액트 아닙니다</h2>}
        </div>

    );
}