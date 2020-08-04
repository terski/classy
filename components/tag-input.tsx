import ChipInput from 'material-ui-chip-input';

const handleAddChip = (chip) => {
    console.log(chip);
};

const TagInput = (props) => {
    return (
            <ChipInput
                defaultValue={props.dataSource}
                fullWidth={true}
                fullWidthInput={true}
                onAdd={(chip) => handleAddChip(chip)}
                variant="outlined"
                label={props.label}
                helperText={props.helperText}
            />
    );
};

export default TagInput;
