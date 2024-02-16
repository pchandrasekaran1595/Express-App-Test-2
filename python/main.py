import sys


def main():
    args_1: str = "--num-1"
    args_2: str = "--num-2"
    args_3: str = "--op"

    if args_1 in sys.argv:
        num_1 = int(sys.argv[sys.argv.index(args_1) + 1])
    if args_2 in sys.argv:
        num_2 = int(sys.argv[sys.argv.index(args_2) + 1])
    if args_3 in sys.argv:
        op = sys.argv[sys.argv.index(args_3) + 1]

    if op == "add":
        print(f"{num_1 + num_2}")
    if op == "sub":
        print(f"{num_1 - num_2}")
    if op == "mul":
        print(f"{num_1 * num_2}")
    if op == "div":
        print(f"{num_1 / num_2}")
    if op == "mod":
        print(f"{num_1 % num_2}")


if __name__ == "__main__":
    sys.exit(main() or 0)
