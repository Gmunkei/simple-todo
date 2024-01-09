declare module "myTypes" {
  type ToDoProps = {
    description: string;
    markAsDone: boolean;
    dateComplete?: Date;
    index?: number;
  };
}

module.exports = {
  ToDoProps,
};
