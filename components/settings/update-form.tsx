'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface ProfileFormProps extends React.ComponentPropsWithoutRef<'div'> {
  initialProfile?: {
    firstName: string;
    lastName: string;
    age: string;
    college: string;
    gradYear: string;
    major: string;
  };
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  className,
  initialProfile,
  ...props
}) => {
  const [profile, setProfile] = useState(
    initialProfile || {
      firstName: '',
      lastName: '',
      age: '',
      college: '',
      gradYear: '',
      major: '',
    }
  );

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const isChanged = Object.keys(profile).some(
      (key) =>
        profile[key as keyof typeof profile] !== initialProfile?.[key as keyof typeof profile]
    );
    setIsDirty(isChanged);
  }, [profile, initialProfile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    console.log('Updated profile:', profile);
    // Reset the dirty state after saving
    setIsDirty(false);
  };

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="text-2xl">Update Profile</CardTitle>
        <CardDescription>Update your profile information below</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                placeholder="John"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={profile.age}
                onChange={handleInputChange}
                placeholder="25"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="college">College</Label>
              <Input
                id="college"
                name="college"
                value={profile.college}
                onChange={handleInputChange}
                placeholder="University of Example"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gradYear">Graduation Year</Label>
              <Input
                id="gradYear"
                name="gradYear"
                type="number"
                value={profile.gradYear}
                onChange={handleInputChange}
                placeholder="2025"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="major">Major</Label>
              <Input
                id="major"
                name="major"
                value={profile.major}
                onChange={handleInputChange}
                placeholder="Computer Science"
              />
            </div>
            <div>
              <Link href={'/settings/update-profile'}>
                <Button type="button" className="w-full" disabled={!isDirty}>
                  Back
                </Button>
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={!isDirty}>
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
