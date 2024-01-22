'use client';

import ServiceCard from '@/components/common/ServiceCard';
import DropController from '@/components/DropController';
import ServicesDropContainer from '@/components/ServicesDropContainer';
import ServicesList from '@/components/ServicesList';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
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
          <div className='w-[70%] h-full p-8'>
            <div className='flex justify-between items-center'>
              <div>
                <h1 className='text-xl font-semibold mb-2'>Drop It 🧰</h1>
                <p className='text-slate-500'>
                  Drag and drop the required service to create your custom
                  package
                </p>
              </div>
              <DropController />
            </div>

            <ServicesList />
          </div>
          <ServicesDropContainer />
        </main>
      </DndProvider>
    </ServicesProvider>
  );
}
