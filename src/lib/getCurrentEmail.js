import { clerkClient, currentUser } from '@clerk/nextjs';

export default async function getEmailAddress() {
  const user = await currentUser();

  if (user) {
    const response = await clerkClient?.emailAddresses?.getEmailAddress(
      user?.primaryEmailAddressId
    );

    console.log('response', response);

    return response?.emailAddress;
  }
}
