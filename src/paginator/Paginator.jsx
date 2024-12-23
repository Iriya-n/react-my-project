import { useState } from "react";
import "./Paginator.scss";

export function Paginator({ pagesCount, currentPage, setCurrentPage }) {
	const [pages, setPages] = useState([1, 2, 3, "...", pagesCount]);
	

	const handleRightClick = () => {
		setCurrentPage((prev) => {
			if (prev + 1 <= 42) {
				prev = prev + 1;
			}

			return prev;
		});

		if (currentPage === 4) {
			setPages([1, "...", 3, 4, "...", pagesCount]);
		}

		if (currentPage > 4) {
			setPages((prevPages) => {
				return [1, "...", prevPages[2]++, prevPages[3]++, "...", pagesCount];
			});

			console.log(pages);
		}
	};

	const handleLeftClick = () => {
		setCurrentPage((prev) => {
			if (prev - 1 > 0) {
				prev = prev - 1;
			}

			return prev;
		});
	};

	return (
		<ul className="paginator">
			{currentPage}

			<li className="page arrow">
				<button onClick={handleLeftClick}>
					<img className="arrow left" src="/src/assets/left.svg"></img>
				</button>
			</li>
			{pages.map((page, i) => {
				return (
					<li
						className={`${typeof page === "string" ? "ellipsis" : "page"} ${page === currentPage ? "page_active" : ""}`}
						key={page}
					>
						{typeof page === "string" ? <span>...</span> : <a href="#">{page}</a>}
					</li>
				);
			})}
			<li className="page arrow">
				<button onClick={handleRightClick}>
					<img className="arrow right" src="/src/assets/right.svg"></img>
				</button>
			</li>
		</ul>
	);
}