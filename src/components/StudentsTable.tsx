import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // import shadcn table component
import { students } from "@/data/studentsTableData"; // import the students table data
import Image from "next/image";

const Students = () => {
    // table headings
    const headings = [
        "No",
        "Profile",
        "Belt",
        "Roll",
        "Name",
        "Batch",
        "Presence",
        "Result",
    ];

    return (
        <div className="  overflow-x-scroll">
            <Table className="w-[45rem] md:w-full overflow-x-scroll">
                <TableHeader>
                    <TableRow className="bg-grayx ">
                        {headings.map((heading, i) => (
                            <TableHead
                                className={`text-center border-r-2 border-white last:border-none`}
                                key={i}
                            >
                                {heading}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* map the table data */}
                    {students.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell className="text-center">
                                {student.id}
                            </TableCell>
                            <TableCell>
                                <div className=" rounded-full grid place-content-center">
                                    <Image
                                        placeholder="blur"
                                        className=" rounded-full object-cover h-9 overflow-hidden w-9"
                                        src={student.profile}
                                        alt={student.name}
                                    />
                                </div>
                            </TableCell>
                            <TableCell className="w-[45px]">
                                <div className=" rounded-full grid place-content-center">
                                    <Image
                                        className=" rounded-full  object-cover h-9 overflow-hidden w-9"
                                        src={student.belt}
                                        alt="belt"
                                    />
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {student.roll}
                            </TableCell>
                            <TableCell className="text-center">
                                {student.name}
                            </TableCell>
                            <TableCell className="text-center flex shrink-0 w-44 mx-auto justify-center">
                                {student.batch}
                            </TableCell>
                            <TableCell className="text-center">
                                <span>{student.presence}</span>
                                <span>%</span>
                            </TableCell>
                            <TableCell
                                className={`text-center ${
                                    student.result.includes("pass")
                                        ? "text-green-500 font-semibold"
                                        : ""
                                }`}
                            >
                                {student.result}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Students;
