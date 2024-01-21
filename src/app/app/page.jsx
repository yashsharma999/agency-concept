'use client';

import ServiceCard from '@/components/common/ServiceCard';
import ServicesDropContainer from '@/components/ServicesDropContainer';
import ServicesList from '@/components/ServicesList';
import {
  ServicesProvider,
  useServiceContext,
} from '@/providers/ServicesContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function AppPage() {
  return (
    <ServicesProvider>
      <DndProvider backend={HTML5Backend}>
        <main className='flex h-screen'>
          <div className='w-[60%] h-full p-8'>
            <h1 className='text-xl font-semibold mb-2'>Drop It 🧰</h1>
            <p className='text-slate-500'>
              Drag and drop the required service to create your custom package
            </p>
            <ServicesList />
          </div>
          <ServicesDropContainer />
        </main>
      </DndProvider>
    </ServicesProvider>
  );
}
