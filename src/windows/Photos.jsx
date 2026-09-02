import { WindowControls } from "#components/Index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Search } from "lucide-react";

const photos = [
    {
        id: 1,
        src: "/images/photo1.jpg",
        name: "Project 1",
    },
    {
        id: 2,
        src: "/images/photo2.jpg",
        name: "Project 2",
    },
    {
        id: 3,
        src: "/images/photo3.jpg",
        name: "Project 3",
    },
    {
        id: 4,
        src: "/images/photo4.jpg",
        name: "Project 4",
    },
];

const Photos = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="flex-1 text-center font-semibold">
                    Photos
                </div>

                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                {/* Sidebar */}
                <aside className="w-48 bg-gray-100 p-4">
                    <h3 className="text-xs text-gray-500 font-semibold mb-3">
                        LIBRARY
                    </h3>

                    <ul className="space-y-1">
                        <li className="active">
                            📷 Photos
                        </li>

                        <li>
                            🕘 Recents
                        </li>

                        <li>
                            ❤️ Favorites
                        </li>
                    </ul>

                    <h3 className="text-xs text-gray-500 font-semibold mt-6 mb-3">
                        ALBUMS
                    </h3>

                    <ul className="space-y-1">
                        <li>💻 Projects</li>
                        <li>🎨 Designs</li>
                        <li>📸 Screenshots</li>
                    </ul>
                </aside>

                {/* Photos */}
                <main className="flex-1 p-5 overflow-auto">
                    <h2 className="text-xl font-semibold mb-5">
                        Photos
                    </h2>

                    <div className="grid grid-cols-4 gap-3">
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition"
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;