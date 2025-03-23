import { useState } from "react";

function StudentManagement() {
    const [students] = useState(["Head", "Abhishek", "Cummins", "Maxwell", "Inglis"]);
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (name) => {
        if (!favorites.includes(name)) {
            setFavorites([...favorites, name]);
        }
    };

    const removeFromFavorites = (name) => {
        setFavorites(favorites.filter((student) => student !== name));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen 
                        bg-[radial-gradient(circle_farthest-corner_at_3.2%_49.6%,rgba(80,12,139,0.87)_0%,rgba(161,10,144,0.72)_83.6%)] p-4">

            <h1 className="text-[30px] md:text-[50px] font-bold mb-6 text-white">
                Student Management
            </h1>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10">

                {/* Student List */}
                <div className="w-full md:w-[400px] bg-[#240046] p-6 rounded-2xl shadow-lg">
                    <h2 className="text-[40px] md:text-xl font-semibold text-white bg-purple-600 px-4 py-2 rounded-lg">
                        Student List
                    </h2>
                    <ul className="mt-4 space-y-2">
                        {students.map((student, index) => (
                            <li key={index} className="flex justify-between items-center px-3 py-2 md:py-3 gap-4 bg-purple-800 rounded-lg">
                                <span>{student}</span>
                                {!favorites.includes(student) && (
                                    <button
                                        className="bg-gradient-to-r from-[#ff6e7f] via-[#bfe9ff] to-[#ff6e7f] bg-[length:200%_auto] 
                                                   text-white text-center uppercase transition-all duration-500 shadow-lg rounded-lg 
                                                   px-2 py-1 md:px-8 md:py-3 block hover:bg-right"
                                        onClick={() => addToFavorites(student)}
                                    >
                                        Add
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Favorite Students */}
                <div className="w-full md:w-[400px] bg-[#240046] p-6 rounded-2xl shadow-lg">
                    <h2 className="text-[20px] md:text-xl font-semibold text-white bg-purple-600 px-4 py-2 rounded-lg">
                        Favorite Students
                    </h2>
                    {favorites.length === 0 ? (
                        <p className="mt-4 text-gray-300">No favorites yet.</p>
                    ) : (
                        <ul className="mt-4 space-y-2">
                            {favorites.map((fav, index) => (
                                <li key={index} className="flex justify-between items-center px-3 py-2 md:py-3 bg-purple-800 rounded-lg">
                                    <span>{fav}</span>
                                    <button
                                        className="bg-gradient-to-r from-[#870000] via-[#190A05] to-[#870000] bg-[length:200%_auto] 
                                                   text-white text-center uppercase transition-all duration-500 shadow-lg rounded-lg 
                                                   px-2 py-1 md:px-5 md:py-3 block hover:bg-right"
                                        onClick={() => removeFromFavorites(fav)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}


export default StudentManagement