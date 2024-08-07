"use client";
import "../../styles/lifecounter.scss";
import Controls from "./_components/Controls";
export default function LifeCounter() {
	return (
		<article className="border w-full h-full absolute top-0 left-0 p-3">
			<section className="game ">
				<section className="top-controls">
					<nav className="">
						<button type="button" className="back text-3xl">
							⬅️
						</button>
						<button type="button" className="text-2xl border-t border">
							Game 1
						</button>
					</nav>
				</section>
				<section className="titles">
					<h3 className="bg-orange-800 p-1 pl-2">Player Name</h3>
					<h3 className="bg-sky-800 text-right p-1 pr-2">Opponent</h3>
				</section>
				<section className="side-controls controls-p h-full">
					<Controls user="player" />
				</section>
				<section className="main-tracker h-full">
					<div className="player">
						<div className="history">🏛</div>
						<div className="current">20</div>
					</div>
					<div className="opponent">
						<div className="history">🏛</div>
						<div className="current">20</div>
					</div>
				</section>
				<section className="side-controls controls-o h-full ">
					<Controls user="opponent" />
				</section>
				<section className="bottom-controls border">... add controls</section>
			</section>
		</article>
	);
}
