declare module "myTypes" {
  type ToDoProps = {
    description: string;
    markAsDone: boolean;
    dateComplete?: Date;
    index?: string;
  };
}

module.exports = {
  ToDoProps,
};
