import React, { useState, useEffect } from "react";
import { settings } from 'carbon-components';
import { Checkbox, FormGroup, Tooltip, NumberInput } from 'carbon-components-react';
import { setStorage, getStorage } from '../../../utilities';
import { Column32, Grid32, Information16 } from '@carbon/icons-react';
import { labelMaker } from './labelMaker';

const { prefix } = settings;
const defaults = {
    toggle2xColumns: true,
    toggle2xBreakpoints: true,
    toggle2xLeftInfluencer: 0,
    toggle2xRightLeftInfluencer: 0
};

function Grid2xOptions ({ disabled }) {

    const [toggle2xGridOptions, setToggle2xGridOptions] = useState(defaults);
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => { // get storage and set defaults
        const dataKey = 'toggle2xGridOptions';
        getStorage([dataKey], dataReceived => {
            // should this be passed in via props?
            if (dataReceived && dataReceived[dataKey]) {
                setToggle2xGridOptions(dataReceived[dataKey]);
            }

            setOnLoad(true);
        });
    }, []);

    useEffect(() => { // update storage
        if (onLoad) {
            setStorage({ toggle2xGridOptions });
        }
    });

    return !onLoad ? null : (
        <>
            <FormGroup legendText="Options">
                <div className={`${prefix}--row`}>
                    <div className={`${prefix}--col-sm-2`}>
                        <Checkbox
                            disabled={disabled}
                            labelText={labelMaker('Columns')}
                            id="toggle2xColumns"
                            checked={toggle2xGridOptions['toggle2xColumns']}
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xColumns'] = e;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                    <div className={`${prefix}--col-sm-2`}>
                        <Checkbox
                            disabled={disabled}
                            labelText={labelMaker('Gutters')}
                            id="toggle2xGutters"
                            checked={toggle2xGridOptions['toggle2xGutters']}
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xGutters'] = e;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                    <div className={`${prefix}--col-sm-2`}>
                        <Checkbox
                            disabled={disabled}
                            labelText={labelMaker('Borders')}
                            id="toggle2xBorders"
                            checked={toggle2xGridOptions['toggle2xBorders']}
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xBorders'] = e;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                    <div className={`${prefix}--col-sm-2`}>
                        <Checkbox
                            disabled={disabled}
                            labelText={labelMaker('Full width')}
                            id="toggle2xFullWidth"
                            checked={toggle2xGridOptions['toggle2xFullWidth']}
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xFullWidth'] = e;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                    <div className={`${prefix}--col-sm-2`}>
                        <Checkbox
                            disabled={disabled}
                            labelText={labelMaker('Breakpoints')}
                            id="toggle2xBreakpoints"
                            checked={toggle2xGridOptions['toggle2xBreakpoints']}
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xBreakpoints'] = e;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                    <div className={`${prefix}--col-sm-2`}>
                        <Checkbox
                            disabled={disabled}
                            labelText={labelMaker('Column label')}
                            id="toggle2xColumnLabel"
                            checked={toggle2xGridOptions['toggle2xColumnLabel']}
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xColumnLabel'] = e;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                </div>
                <div className={`${prefix}--row`}>
                    <div className={`${prefix}--col-sm-2`}>
                         <NumberInput
                            disabled={disabled}
                            label={labelMaker('Left influencer')}
                            min={0}
                            step={8}
                            value={toggle2xGridOptions['toggle2xLeftInfluencer']}
                            size="sm"
                            invalidText="Please input a positive integer"
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xLeftInfluencer'] = e.imaginaryTarget.value || 0;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                    <div className={`${prefix}--col-sm-2`}>
                         <NumberInput
                            disabled={disabled}
                            label={labelMaker('Right influencer')}
                            min={0}
                            step={8}
                            value={toggle2xGridOptions['toggle2xRightInfluencer']}
                            size="sm"
                            invalidText="Please input a positive integer"
                            onChange={e => {
                                const changes = {...toggle2xGridOptions};
                                changes['toggle2xRightInfluencer'] = e.imaginaryTarget.value || 0;
                                setToggle2xGridOptions(changes);
                            }}
                        />
                    </div>
                </div>
            </FormGroup>
        </>
    );
}

export { Grid2xOptions };