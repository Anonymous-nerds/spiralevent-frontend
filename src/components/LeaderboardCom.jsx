import React, { useState, useEffect } from "react";
import logo from "../assets/spiraleE4.png";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 10;

const LeaderboardCom = () => {
  const [participants, setParticipants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(
          "https://api-spiralevent.vercel.app/points/list"
        );
        const formattedParticipants = response.data.data
          .map((item) => ({
            rank: 0, // Rank will be assigned after sorting
            name: `${item.Waitlist.firstName} ${item.Waitlist.lastName}`,
            score: item.points,
            avatar: `https://i.pravatar.cc/100?img=${item.id}`, // Placeholder avatar
          }))
          .sort((a, b) => b.score - a.score) // Sort by score in descending order
          .map((participant, index) => ({
            ...participant,
            rank: index + 1, // Assign rank after sorting
          }));
        setParticipants(formattedParticipants);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    fetchParticipants();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentParticipants = participants.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(participants.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-5 px-3 sm:px-6 lg:px-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-2 mb-8">
          <img className="App-logo w-20" src={logo} alt="logo " />
          {/* <h6 className="">Spiral Event</h6> */}
        </div>

        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-1">
          Leaderboard of Champions
        </h1>
        <p className="text-center text-lg mb-2">
          Welcome to the Spiral Event Leaderboard – where participants shine and
          excellence is celebrated!
        </p>

        <div className="mb-10 mt-5 flex justify-center">
          <Link
            className="text-center bg-pink-900 p-3 px-10 rounded-lg text-neutral-100 text-sm"
            to={"/"}
          >
            Join the Waitlist Now
          </Link>
        </div>

        <div className="bg-white mt-5 shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <table className="w-full">
              <thead>
                <tr className="text-left text-pink-900 border-b-2 border-pink-100">
                  <th className="pb-4 font-semibold text-lg">Rank</th>
                  <th className="pb-4 font-semibold text-lg">Name</th>
                  <th className="pb-4 font-semibold text-lg text-right">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentParticipants.map((participant) => (
                  <tr
                    key={participant.rank}
                    className="border-b border-gray-100 hover:bg-pink-50 transition-colors duration-200"
                  >
                    <td className="py-6">
                      <div className="flex items-center">
                        {participant.rank === 1 && (
                          <FaTrophy className="text-yellow-400 mr-2 text-2xl" />
                        )}
                        {participant.rank === 2 && (
                          <FaMedal className="text-gray-400 mr-2 text-2xl" />
                        )}
                        {participant.rank === 3 && (
                          <FaAward className="text-yellow-600 mr-2 text-2xl" />
                        )}
                        <span
                          className={`font-bold text-2xl ${
                            participant.rank <= 3
                              ? "text-pink-900"
                              : "text-gray-900"
                          }`}
                        >
                          {participant.rank}
                        </span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center">
                        <img
                          src={`https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&clotheType=ShirtCrewNeck&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light&id=${participant.id}`}
                          alt={`${participant.name}'s avatar`}
                          className="w-12 h-12 rounded-full"
                        />
                        <span className="font-medium text-gray-900 text-sm">
                          {participant.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 text-right">
                      <span className="font-semibold text-gray-900 text-sm">
                        {participant.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-8 py-4 flex justify-between items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-red-300 text-white rounded-md disabled:bg-red-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
            >
              <FaChevronLeft className="mr-2" /> Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-red-300 text-white rounded-md disabled:bg-red-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
            >
              Next <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
        {/* content */}
        <div className="my-10">
          <h5 className="text-lg font-bold">Compete. Achieve. Celebrate!</h5>
          <p className="mt-3">
            The leaderboard is your stage to shine. Whether you’re aiming for
            the top or improving your personal best, there’s always a reason to
            participate. Push your limits, earn your rank, and let the world see
            what you’re made of!
          </p>
        </div>
        {/* end content */}
      </div>
    </div>
  );
};

export default LeaderboardCom;
