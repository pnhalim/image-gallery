

const ImageCard = ({image, search}) => {

	const tags = image.tags.split(',');

	return (
		<div>
			<div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 transition ease-out">
				<img className="w-full h-56 object-cover" src={image.webformatURL} alt="randomimg"/>
				<div className="px-6 pt-4">
					<div className="font-bold text-primary text-xl mb-2">
					Photo by {image.user}
					</div>
					<ul>
					<li>
						<strong>Views: </strong> {image.views}
					</li>
					<li>
						<strong>Downloads: </strong> {image.downloads}
					</li>
					<li>
						<strong>Likes: </strong> {image.likes}
					</li> 
					</ul>
				</div>
				<div className="px-6 py-4">
					{tags.map((tag, index) => (
						<button key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1 border-2 hover:border-accent hover:bg-slate-100 cursor-pointer" onClick={() => search(tag)}>
							#{tag}
						</button>
					))}

				</div>
			</div>
		</div>
	);
}
 
export default ImageCard;