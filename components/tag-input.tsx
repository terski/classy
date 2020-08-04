import ChipInput from 'material-ui-chip-input';
import { OutlinedInput, Box } from '@material-ui/core';

const handleAddChip = (chip) => {
    console.log(chip);
};

const TagInput = (props) => {
    return (
            <ChipInput
                defaultValue={['funny', 'vibrant', '80s']}
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
