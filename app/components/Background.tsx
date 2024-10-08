import Image from "next/image";
import Lines from "./Lines";

export default function Background() {
	return (
		<>
			<div className="img-backgorund opacity-20 -z-10 absolute w-full h-full">
				<Image
					src="/images/warleaderscall.webp"
					fill
					alt="bg"
					className="object-cover"
				/>
			</div>
			<Lines />
		</>
	);
}
