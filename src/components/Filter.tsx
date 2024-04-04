import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Filter = ({ batch }: { batch: any }) => {
    return (
        <div>
            <Select >
                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder={batch.placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {batch.batches.map((batch: string) => (
                        <SelectItem key={batch} value="Karate Course 22041">
                            {batch}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default Filter;
