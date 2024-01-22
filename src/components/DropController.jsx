import { useServiceContext } from '@/providers/ServicesContext';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

export default function DropController() {
  const { dragNDropDisabled, setDragNDropDisabled } = useServiceContext();

  return (
    <div className='flex items-center space-x-2'>
      <Switch
        id='dragEnabled'
        checked={dragNDropDisabled}
        onCheckedChange={(value) => {
          setDragNDropDisabled(value);
        }}
      />
      <Label htmlFor='dragEnabled'>{`No drag & drop 🥱`}</Label>
    </div>
  );
}
