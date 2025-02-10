"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AlertModal from "@/components/components/AlertModel";
import {useSelector} from "react-redux"
const updates = {};
export default function MyProfile() {
    const {consultant,role}=useSelector(state=>state.consultant);

  const profile = {
    firstName: consultant.firstName,
    lastName: consultant.lastName,
    email: consultant.email,
    phoneNumber: consultant?.phoneNumber,
  };

//   const [formData, setFormData] = useState({
//     firstName: profile.firstName ,
//     lastName: profile.lastName ,
//     phoneNumber: profile.phoneNumber,
//     email: profile.email,
//     image: "/images/client.png", 
// });
  const [avatar, setAvatar] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result); // Set uploaded image to state
      };
      reader.readAsDataURL(file);
    }
  };

  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [showDialog, setShowDialog] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             setFormData((prev) => ({ ...prev, image: reader.result }));
//         };
//         reader.readAsDataURL(file);
//     }
// };

  const hideDialog = () => {
    setShowDialog(false);
  };

  const handleChange = (e) => {
    if (profile[e.target.name] === e.target.value) {
      delete updates[e.target.name];
    } else {
      updates[e.target.name] = e.target.value;
    }
    setDisabled(Object.keys(updates).length === 0);
  };

  const saveChanges = async () => {
    console.log("Saving changes:", updates);
    setShowDialog(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 md:px-12 bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-6">
          <Avatar className="h-[100px] w-[100px]">
          <AvatarImage src={avatar || "/default-avatar.png"} alt="Profile" />
            <AvatarFallback>
              {profile.firstName[0] + profile.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {profile.firstName + " " + profile.lastName}
            </h2>
            {role=="Admin"&&<p className="text-gray-500">Administrator</p>}
          </div>
        </div>
        <div>
          <input
            id="fileField"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById("fileField").click()}
          >
            Change Image
          </Button>
        </div>
      </div>

      {/* Profile Form */}
      <Card className="w-full max-w-4xl mt-8 bg-white shadow-md rounded-lg">
        <CardHeader className="bg-customBLUE text-white rounded-t-lg p-6">
          <CardTitle className="text-lg font-semibold">Modifier profil</CardTitle>
          <CardDescription className="text-sm">
            Update your profile information below.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              defaultValue={profile.email}
              id="email"
              type="email"
              disabled
              name="email"
              className="border-gray-300"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="last-name" className="text-gray-700">
              Last Name
            </Label>
            <Input
              defaultValue={profile.lastName}
              id="last-name"
              onChange={handleChange}
              name="lastName"
              className="border-gray-300"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>

          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="first-name" className="text-gray-700">
              First Name
            </Label>
            <Input
              defaultValue={profile.firstName}
              id="first-name"
              name="firstName"
              onChange={handleChange}
              className="border-gray-300"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone-number" className="text-gray-700">
              Phone Number
            </Label>
            <Input
              defaultValue={profile.phoneNumber}
              id="phone-number"
              name="phoneNumber"
              onChange={handleChange}
              className="border-gray-300"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Change Password Section */}
      <Card className="w-full max-w-4xl mt-8 bg-white shadow-md rounded-lg">
        <CardHeader className="bg-customBLUE text-white rounded-t-lg p-6">
          <CardTitle className="text-lg font-semibold">Change Password</CardTitle>
          <CardDescription className="text-sm">
            Update your account password.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-gray-700">
              Current Password
            </Label>
            <Input
              id="current-password"
              type="password"
              name="currentPassword"
              onChange={handleChange}
              className="border-gray-300"
            />
            {errors.currentPassword && (
              <span className="text-red-500 text-sm">
                {errors.currentPassword}
              </span>
            )}
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-gray-700">
              New Password
            </Label>
            <Input
              id="new-password"
              type="password"
              name="newPassword"
              onChange={handleChange}
              className="border-gray-300"
            />
            {errors.newPassword && (
              <span className="text-red-500 text-sm">{errors.newPassword}</span>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-gray-700">
              Confirm New Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              className="border-gray-300"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-6 flex justify-end bg-gray-50 rounded-b-lg">
          <Button
            className="bg-customBLUE text-white hover:bg-blue-700"
            disabled={disabled}
            onClick={saveChanges}
          >
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      {/* Success Alert */}
      <AlertModal
        open={showDialog}
        title="Profile Updated!"
        content="Your profile has been successfully updated."
        onClick={hideDialog}
        buttonTitle="Dismiss"
      />
    </div>
  );
}