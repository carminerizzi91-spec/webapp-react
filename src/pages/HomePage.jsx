import CardMovie from "../components/CardMovie";

function HomePage() {

    return (
        <>
            <h1 className="text-primary">Movie Review</h1>
            <h2><i>The best movie community</i></h2>

            <div className="row row-cols-3 mt-4">
                <CardMovie />
            </div>
        </>

    );
}

export default HomePage