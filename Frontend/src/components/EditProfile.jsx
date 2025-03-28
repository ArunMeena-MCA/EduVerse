import React, { useState } from "react";
import { closeEditProfileModal } from "../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import GeneralButton from "../utils/GeneralButton";
import PrimaryButton from "../utils/PrimaryButton";
import api from "../utils/api";

function EditProfile() {
  const dispatch = useDispatch();
  const [section, setSection] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle image selection with validation
  const handleImageChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, JPEG, and PNG formats are allowed");
        return;
      }

      // Set image preview
      const imageUrl = URL.createObjectURL(file);

      if (type === "avatar") {
        setAvatar(imageUrl);
      } else if (type === "cover") {
        setCover(imageUrl);
      }
      event.target.value = "";
    }
  };

  // Remove selected image
  const removeImage = (type) => {
    if (type === "avatar") {
      setAvatar(null);
    } else if (type === "cover") {
      setCover(null);
    }
  };

  const updateAvatar = async () => {
    if (!avatar) {
      setError("Please select an avatar");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("newAvatar", avatar);
      
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await api.patch("/users/updateUserAvatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);      
      setSuccess(true);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="max-h-[650px] md:w-fit w-72 border border-white pt-4 px- pb-8 rounded-xl bg-zinc-900 shadow-[0px_0px_20px_rgba(251,113,133,0.9)]">
        <div className="flex justify-between px-2">
          <button
            className="text-white text-3xl hover:text-gray-300"
            onClick={() => setSection(0)}
          >
            {section !== 0 && <IoMdArrowRoundBack />}
          </button>

          <button
            className="text-white text-2xl hover:text-gray-300"
            onClick={() => {
              setSuccess(false);
              dispatch(closeEditProfileModal());
            }}
          >
            ✖
          </button>
        </div>
        <div className="mx-16">
          {section === 0 && (
            <div>
              <h2 className="text-2xl text-center text-white font-semibold mb-8">
                UPDATE PROFILE
              </h2>
              <div className="flex flex-col gap-3">
                <GeneralButton
                  onClick={() => setSection(1)}
                  className="rounded-lg "
                >
                  Update Avatar
                </GeneralButton>
                <GeneralButton
                  onClick={() => setSection(2)}
                  className="rounded-lg "
                >
                  Update CoverImage
                </GeneralButton>
                <GeneralButton
                  onClick={() => setSection(3)}
                  className="rounded-lg "
                >
                  Update other details
                </GeneralButton>
                <GeneralButton
                  onClick={() => setSection(4)}
                  className="rounded-lg "
                >
                  Change Password
                </GeneralButton>
              </div>
            </div>
          )}

          {section === 1 && (
            <div>
              {success ? (
                <div>
                  <div className="flex justify-center items-center mt-8">
                    <MdVerified size={72} color="green" />
                    <h1 className="mt-4 font-semibold text-2xl">
                      Avatar updated successfully!
                    </h1>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-lg sm:text-2xl text-center text-white font-semibold mb-8">
                    UPDATE AVATAR
                  </h2>
                  <div className="flex flex-col items-center mt-4">
                    <div className="flex flex-col items-center mt-4">
                      {avatar && (
                        <div className="flex items-center gap-2 mt-4">
                          <img
                            src={avatar}
                            alt="Avatar Preview"
                            className="w-24 h-24 object-cover rounded-md"
                          />
                          <MdDeleteForever
                            onClick={() => removeImage("avatar")}
                            color="Red"
                            size={32}
                          />
                        </div>
                      )}                      

                      {/* Avatar Upload */}
                      {avatar ? (
                        <PrimaryButton
                          onClick={() => updateAvatar()}
                          className="px-20 mt-4"
                        >
                          Update
                        </PrimaryButton>
                      ) : (
                        <label className="flex cursor-pointer text-xl bg-rose-500 text-white px-2 py-1 mt-4 rounded-md hover:bg-rose-600">
                          Upload New Avatar
                          <input
                            name="newAvatar"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, "avatar")}
                            className="absolute opacity-0 w-0 h-0"
                          />
                        </label>
                      )}
                    </div>
                    {/* <GeneralButton className="rounded-lg mt-4 font-normal text-md">Remove current avatar</GeneralButton> */}
                  </div>
                </div>
              )}
            </div>
          )}

          {section === 2 && (
            <div>
              <h2 className="text-2xl text-center text-white font-semibold mb-8">
                UPDATE COVER-IMAGE
              </h2>
            </div>
          )}

          {section === 3 && (
            <div>
              <h2 className="text-2xl text-center text-white font-semibold mb-8">
                UPDATE NAME & EMAIL
              </h2>
            </div>
          )}

          {section === 4 && (
            <div>
              <h2 className="text-2xl text-center text-white font-semibold mb-8">
                CHANGE PASSWORD
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
