export function findInputError(
  errors: Record<string, unknown>,
  name: string
) {
    const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce<{ error: { message: string }}>((cur, key) => {
        return Object.assign(cur, {error: errors[key]})
    }, { error: { message: "" } });

    return filtered;
}
