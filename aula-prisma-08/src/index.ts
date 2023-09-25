import prisma from "./database";


(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    orderBy: { _count: { id: "desc" } },
    where: { jobId: null}
  })
  console.log(students);
})()