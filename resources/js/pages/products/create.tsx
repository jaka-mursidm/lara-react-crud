import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];
export default function Index() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        decsription: ''
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);

    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className='p-4'>
                <form className='space-y-3'>
                    <div>
                        <Label htmlFor='product name'>Name</Label>
                        <Input placeholder='Enter product name' value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div>
                        <Label htmlFor='product price'>Price</Label>
                        <Input placeholder='Enter product price' value={data.price} onChange={(e) => setData('price', e.target.value)}></Input>
                    </div>
                    <div>
                        <Label htmlFor='product description'>Description</Label>
                        <Textarea placeholder='Enter product description' value={data.decsription} onChange={(e) => setData('decsription', e.target.value)}></Textarea>
                    </div>
                    <div>
                        <Button type='submit' onSubmit={handleSubmit}>Create</Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
