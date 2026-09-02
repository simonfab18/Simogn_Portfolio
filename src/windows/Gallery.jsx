import {WindowControls} from "#components/Index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {Search} from "lucide-react";
import {gallery, photosLinks} from "#constants/index.js";
import clsx from "clsx";
import useWindowStore from "#store/window.js";

const LIBRARY_ID = 1;

const Gallery = () => {
    const { openWindow } = useWindowStore();

    const openPhoto = (photo) => {
        openWindow("imgfile", {
            name: photo.name,
            imageUrl: photo.img,
        });
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Photos</h3>
                        <ul>
                            {photosLinks.map((item) => (
                                <li
                                    key={item.id}
                                    className={clsx(item.id === LIBRARY_ID ? "active" : "not-active")}
                                >
                                    <img src={item.icon} className="w-4" alt={item.title} />
                                    <p className="text-sm font-medium truncate">{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="gallery">
                    <ul>
                        {gallery.map((photo) => (
                            <li key={photo.id} onClick={() => openPhoto(photo)}>
                                <img src={photo.img} alt={photo.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
